import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import FormPage from './form';

// Transition for dialog box
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactUsBubble = () => {
  const [open, setOpen] = useState(false);
  
  const [isHovered, setIsHovered] = useState(false);

  // Open dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Floating Contact Us Bubble */}
      <div
        className={`fixed bottom-4 right-4 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-700 transition ${
          isHovered ? 'w-36 h-14' : 'w-14 h-14'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClickOpen}
      >
        {isHovered ? (
          <div className="flex items-center justify-center">
            <Phone className="h-6 w-6 transition-all" />
            <span className="mx-1">CONTACT US</span>
          </div>
        ) : (
          <Phone className="h-7 w-7" />
        )}
      </div>

      {/* Dialog for Contact Form */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* Close button */}
        <div className="absolute top-4 right-4 cursor-pointer">
          <X
            className="h-8 w-8 text-gray-600 hover:text-gray-800 transition duration-200"
            onClick={handleClose}
          />
        </div>

        {/* Contact Form Page */}
        <FormPage />
      </Dialog>
    </div>
  );
};

export default ContactUsBubble;
