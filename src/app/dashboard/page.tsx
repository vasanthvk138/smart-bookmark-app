
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Dashboard() {

  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from('bookmarks')
      .select('*')
      .order('created_at', { ascending: false })
    setBookmarks(data || [])
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) window.location.href = '/'
    })
    fetchBookmarks()
  }, [])

  const addBookmark = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    if (!title || !url) {
      toast.error("Fill all fields")
      return
    }

    await supabase.from('bookmarks').insert([
      { title, url, user_id: user.id }
    ])

    toast.success("Bookmark added")
    setTitle('')
    setUrl('')
    fetchBookmarks()
  }

  const deleteBookmark = async (id: string) => {
    await supabase.from('bookmarks').delete().eq('id', id)
    toast.success("Deleted")
    fetchBookmarks()
  }

  const logout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            My Bookmarks
          </h2>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-8 flex gap-4">
          <input
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="flex-1 border p-3 rounded-lg"
          />
          <input
            placeholder="URL"
            value={url}
            onChange={(e)=>setUrl(e.target.value)}
            className="flex-1 border p-3 rounded-lg"
          />
          <button
            onClick={addBookmark}
            className="bg-indigo-600 text-white px-6 rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="space-y-4">
          {bookmarks.map((b)=>(
            <div
              key={b.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <a
                href={b.url}
                target="_blank"
                className="text-indigo-600 font-medium hover:underline"
              >
                {b.title}
              </a>
              <button
                onClick={()=>deleteBookmark(b.id)}
                className="text-red-500"
              >
                <Trash2 size={18}/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
