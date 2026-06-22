import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

export default function Dropdown({ isOpenDefault = false, onToggle, buttonText = "Toggle Menu", items = [] }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  useEffect(() => {
    if (onToggle) {
      onToggle(isOpen);
    }
  }, [isOpen, onToggle]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
      <button 
        className="dropdown-toggle"
        onClick={toggleDropdown}
        aria-haspopup="true" 
        aria-expanded={isOpen}
      >
        {buttonText}
      </button>
      
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href || "#"}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
