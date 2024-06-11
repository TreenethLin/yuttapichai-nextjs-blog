import * as React from 'react';
import { ShortProfile } from "../components/ShortProfile";
import PhotoGallery from '../components/PhotoGallery';
import { getData } from '@/lib/sanity';
import { Gallery } from '@/lib/interface';
import { urlFor } from '@/lib/sanity';

export const revalidate = 30 // revalidate at most every 30 seconds

export default async function GalleryViewer() {
  const query = `*[_type == "gallery"]{
    title,
    description,
    "photos": photos[]->{
      title,
      "image": image,
      altText
    }
  }`;
  
  const gallery: Gallery[] = await getData(query);

  // Process the gallery data to include the image URLs
  const galleryWithUrls = gallery.map(group => ({
    ...group,
    photos: group.photos.map(photo => ({
      ...photo,
      image: urlFor(photo.image).url(),  // Generate the image URL
    })),
  }));

  return (
    <React.Fragment>
      <ShortProfile />
      <PhotoGallery gallery={galleryWithUrls} />
    </React.Fragment>
  );
}
