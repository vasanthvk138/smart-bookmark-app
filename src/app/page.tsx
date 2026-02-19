
'use client'

import { supabase } from '../lib/supabase'
import { Bookmark } from 'lucide-react'

export default function Home() {

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96 text-center">
        <div className="flex justify-center mb-4">
          <Bookmark size={40} className="text-indigo-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">
          Smart Bookmark
        </h1>
        <p className="text-gray-500 mb-8">
          Save and manage your bookmarks securely.
        </p>
        <button
          onClick={signIn}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
