"use client"

import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import PhotoModal from '../components/PhotoModal';
import { Gallery, Photo } from '@/lib/interface';

interface PhotoGalleryProps {
    gallery: Gallery[];
}

export const revalidate = 30; // revalidate at most every 30 seconds

export default function PhotoGallery({ gallery }: PhotoGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const handlePhotoClick = (photo: Photo) => {
    if (window.innerWidth >= 640) {
        setSelectedPhoto(photo);
        setIsModalOpen(true);
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedPhoto(null)
  }

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose()
      }
    }
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    } else {
      document.removeEventListener("keydown", handleEscapeKey)
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isModalOpen])

  return (
    <React.Fragment>
      {gallery.map((photoGroup, groupIndex) => (
        <div key={groupIndex} className="flex flex-col justify-center items-center text-center mt-6">
          <h1 className="font-bold text-2xl">{photoGroup.title}</h1>
          <p className="text-base font-light">{photoGroup.description}</p>
          <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {photoGroup.photos.map((photo, photoIndex) => (
                <div
                  key={`${groupIndex}-${photoIndex}`}
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => handlePhotoClick(photo)}
                >
                  <Image
                    src={photo.image}
                    alt={photo.altText}
                    width={600}
                    height={400}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <PhotoModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        selectedPhoto={selectedPhoto}
      />
    </React.Fragment>
  )
}
