import React from "react";
import useSocialLinks from "../data/use-social-links";

export const HeroSocialLinks = ({ hide_title = false }) => {
  const socialLinks = useSocialLinks();

  return (
    <>
      {(hide_title ? socialLinks.sort((a, b) => a.order - b.order).filter((l) => l.is_active) : socialLinks.sort((a, b) => a.order - b.order).filter((l) => l.is_active).slice(0, 3))
        .map((l, i) => (
          <a
            key={i}
            href={l.link}
            className={`${l.icon_class}`}
            target={l.target ? l.target : ""}
          >
            <i className={`${l.icon} ${l.icon_class}`}></i>
            {hide_title ? "" : l.title}
          </a>
        ))}
    </>
  );
};

export const SocialLinks = () => {
  const socialLinks = useSocialLinks();

  return (
    <>
      {socialLinks
        .sort((a, b) => a.order - b.order)
        .filter((l) => l.is_active)
        .map((l, i) => (
          <a key={i} href={l.link} target={l.target ? l.target : ""}>
            <i className={l.icon}></i>
          </a>
        ))}
    </>
  );
};
