"use client";

import { useEffect, useState } from "react";

export function PortfolioClient() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const cursorGlow = document.getElementById("cursorGlow");
    if (cursorGlow && window.matchMedia("(pointer:fine)").matches) {
      const onMouseMove = (event: MouseEvent) => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
      };
      document.addEventListener("mousemove", onMouseMove, { passive: true });
      return () => document.removeEventListener("mousemove", onMouseMove);
    }

    if (cursorGlow) {
      cursorGlow.style.display = "none";
    }
  }, []);

  useEffect(() => {
    const header = document.getElementById("site-header");
    const onScroll = () => {
      header?.classList.toggle("pinned", window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerLinks = document.querySelectorAll(".drawer-link");

    const toggleMenu = (open: boolean) => {
      menuToggle?.classList.toggle("open", open);
      mobileDrawer?.classList.toggle("open", open);
      menuToggle?.setAttribute("aria-expanded", String(open));
      mobileDrawer?.setAttribute("aria-hidden", String(!open));
      document.body.style.overflow = open ? "hidden" : "";
    };

    menuToggle?.addEventListener("click", () => {
      toggleMenu(!menuToggle.classList.contains("open"));
    });

    drawerLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    const NAV_H = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 70;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        event.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - NAV_H, behavior: "smooth" });
      });
    });

    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = document.querySelectorAll("[data-nav]");
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("data-nav") === entry.target.id);
            });
          }
        });
      },
      { threshold: 0.35, rootMargin: `-${NAV_H}px 0px 0px 0px` }
    );

    sections.forEach((section) => navObserver.observe(section));

    const revealEls = document.querySelectorAll(".reveal-up");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const siblings = Array.from(entry.target.parentElement?.querySelectorAll(".reveal-up") ?? []);
          const index = siblings.indexOf(entry.target as Element);
          setTimeout(() => entry.target.classList.add("in-view"), index * 90);
          revealObs.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((element) => revealObs.observe(element));

    document.querySelectorAll(".bento-big-num[data-count]").forEach((element) => {
      const item = element as HTMLElement;
      const target = parseFloat(item.dataset.count ?? "0");
      const dec = parseInt(item.dataset.dec ?? "0", 10);
      const duration = 1400;
      let started = false;

      const counterObserver = new IntersectionObserver(
        (entries) => {
          if (!entries[0]?.isIntersecting || started) return;
          started = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            item.textContent = (target * ease).toFixed(dec);
            if (progress < 1) requestAnimationFrame(tick);
            else item.textContent = target.toFixed(dec);
          };
          requestAnimationFrame(tick);
          counterObserver.disconnect();
        },
        { threshold: 0.5 }
      );
      counterObserver.observe(item);
    });

    document.querySelectorAll(".radial-fill").forEach((circle) => {
      const item = circle as HTMLElement;
      const radialObserver = new IntersectionObserver(
        (entries) => {
          if (!entries[0]?.isIntersecting) return;
          item.classList.add("animate");
          radialObserver.disconnect();
        },
        { threshold: 0.4 }
      );
      radialObserver.observe(item);
    });

    const descriptorTrack = document.getElementById("descriptorTrack");
    if (descriptorTrack) {
      const items = Array.from(descriptorTrack.children);
      if (items.length >= 2) {
        let index = 0;
        const itemHeight = 28;
        (descriptorTrack as HTMLElement).style.transition = "transform 0.55s cubic-bezier(0.4,0,0.2,1)";
        window.setInterval(() => {
          index = (index + 1) % items.length;
          if (index === 0) {
            (descriptorTrack as HTMLElement).style.transition = "none";
            (descriptorTrack as HTMLElement).style.transform = "translateY(0)";
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                (descriptorTrack as HTMLElement).style.transition = "transform 0.55s cubic-bezier(0.4,0,0.2,1)";
              });
            });
          } else {
            (descriptorTrack as HTMLElement).style.transform = `translateY(${-index * itemHeight}px)`;
          }
        }, 2200);
      }
    }

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg") as HTMLImageElement | null;
    const lightboxClose = document.getElementById("lightboxClose");

    if (lightbox && lightboxImg && lightboxClose) {
      const openLightbox = (src: string, alt: string) => {
        setLightboxSrc(src);
        setLightboxAlt(alt);
        setIsLightboxOpen(true);
        document.body.style.overflow = "hidden";
        lightboxClose.focus();
      };

      const closeLightbox = () => {
        setIsLightboxOpen(false);
        setLightboxSrc(null);
        setLightboxAlt("");
        document.body.style.overflow = "";
      };

      document.querySelectorAll(".cert-polaroid").forEach((card) => {
        card.addEventListener("click", () => {
          const img = card.querySelector("img");
          if (img) openLightbox(img.getAttribute("src") ?? "", img.getAttribute("alt") ?? "");
        });
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.addEventListener("keydown", (event: Event) => {
          const keyboardEvent = event as KeyboardEvent;
          if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
            event.preventDefault();
            const img = card.querySelector("img");
            if (img) openLightbox(img.getAttribute("src") ?? "", img.getAttribute("alt") ?? "");
          }
        });
      });

      lightboxClose.addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeLightbox();
      });
    }

    document.querySelectorAll(".cta-primary, .hire-btn, .channel-primary").forEach((button) => {
      const item = button as HTMLElement;
      item.addEventListener("mousemove", (event) => {
        const rect = item.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        item.style.transform = `translate(${x}px, ${y}px)`;
      });
      item.addEventListener("mouseleave", () => {
        item.style.transform = "";
      });
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" id="cursorGlow" aria-hidden="true" />
      <div
        className="lightbox"
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Certificate preview"
        aria-hidden={!isLightboxOpen ? "true" : "false"}
      >
        <button className="lightbox-close" id="lightboxClose" aria-label="Close preview">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        {lightboxSrc ? <img id="lightboxImg" src={lightboxSrc} alt={lightboxAlt} /> : null}
      </div>
    </>
  );
}
