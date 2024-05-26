import React from 'react'
import SocialPack from './SocialPack'
import { Separator } from '@/components/ui/separator'

export const ShortProfile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <blockquote className="my-6 border-l-2 pl-6 italic">
    “Originally from the south of Thailand (Suratthani), I am an ex-beachboy who fall in love with problem-solving and always believes that anyone can be better if they do not stop learning. I am a former recruiter, now working as software engineer”
    </blockquote>
    <SocialPack />
    <Separator className="mt-8"/>
  </div>
  )
}
