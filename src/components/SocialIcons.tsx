import Link from "next/link";
import React from "react";
import {
  
  FaTelegram,
} from "react-icons/fa";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Telegram", icon: <FaTelegram />, link: "https://t.me/l_vasha" },
    
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
