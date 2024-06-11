import * as React from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { CloseOutlined } from '@ant-design/icons';
import { Photo } from '@/lib/interface';

type PhotoModalProps = {
  selectedPhoto: Photo | null;
  isModalOpen: boolean;
  handleModalClose: () => void;
};

export default function PhotoModal({ isModalOpen, handleModalClose, selectedPhoto }: PhotoModalProps) {
  if (!selectedPhoto) return null;

  return (
    <React.Fragment>
      <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
        <div className="fixed inset-0 bg-black/50 z-50" />
        <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-950 rounded-lg shadow-lg z-50 w-full sm:w-[90vw] md:w-[70vw] lg:w-[55vw] xl:w-[45vw] max-w-4xl max-h-[90vh] overflow-hidden outline-none">
          <div className="relative">
            <Image
              src={selectedPhoto.image}
              alt="image"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="absolute top-2 right-2 rounded-full p-2 cursor-pointer">
              <CloseOutlined onClick={handleModalClose} />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold">{selectedPhoto.title}</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 hidden sm:block">{selectedPhoto.altText}</p>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}