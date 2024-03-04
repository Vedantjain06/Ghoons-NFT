import FullWidthBg from "../../../components/FullWidthBg/FullWidthBg";
import FooterLinks from "../../../data/FooterLinks.json";
import leviathanBg from "../../../images/home/leviathan/leviathan-bg.jpg";
import AnchorLink from "../../../components/AnchorLink/AnchorLink";

// import leviathan1 from "../../../images/home/leviathan/lev1.png";
// import leviathan2 from "../../../images/home/leviathan/lev2.png";
// import leviathan3 from "../../../images/home/leviathan/lev3.png";
// import leviathan4 from "../../../images/home/leviathan/lev4.png";
// import leviathan5 from "../../../images/home/leviathan/lev5.png";

import "./Leviathan.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Sine } from "gsap/gsap-core";
import { pdf } from "../../../pdf/pdf";

const random = (min: number, max: number) => {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
};

const Leviathan = () => {
  const leviathanRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const randomX = random(1, 7);
    const randomY = random(1, 20);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(-10, 10);

    const moveX = (target: HTMLImageElement, direction: number) => {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    };

    const moveY = (target: HTMLImageElement, direction: number) => {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    };

    const rotate = (target: HTMLImageElement, direction: number) => {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    };

    leviathanRef.current.forEach((leviathan) => {
      gsap.set(leviathan, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
      });

      moveX(leviathan, 1);
      moveY(leviathan, -1);
      rotate(leviathan, 1);
    });
  }, []);

  return (
    <section id="leviathan">
      <FullWidthBg
        url={leviathanBg}
        type="image" 
        classSection="leviathan"
        customClass="leviathan__image"
      >
        <h1 className="big-text leviathan__title">«Project X»</h1>

        <div className="leviathan__text">
          <h2 className="leviathan__text_title">
            OUR PRIMARY UNREVEALED UTILITY PROJECT 
          </h2>
          <p className="leviathan__text_sub_title">
          "Project X" has generated anticipation and curiosity, with many eagerly awaiting its unveiling to see what mysteries lie behind the enigmatic title.Just to brief audience it's the primary project by Ghoons on solana which will serve as utility for Ghoons's believers
          </p>
        </div>

        {/* <div className="leviathan__body">
          <img
            ref={(el) => leviathanRef.current.push(el!)}
            src={leviathan1}
            alt="leviathan-1"
            className="leviathan__body_image leviathan__body_image--1"
          />
        </div>

        <div className="leviathan__body">
          <img
            ref={(el) => leviathanRef.current.push(el!)}
            src={leviathan2}
            alt="leviathan-2"
            className="leviathan__body_image leviathan__body_image--2"
          />
        </div>
        <div className="leviathan__body">
          <img
            ref={(el) => leviathanRef.current.push(el!)}
            src={leviathan3}
            alt="leviathan-3"
            className="leviathan__body_image leviathan__body_image--3"
          />
        </div>
        <div className="leviathan__body">
          <img
            ref={(el) => leviathanRef.current.push(el!)}
            src={leviathan4}
            alt="leviathan-4"
            className="leviathan__body_image leviathan__body_image--4"
          />
        </div>
        <div className="leviathan__body">
          <img
            ref={(el) => leviathanRef.current.push(el!)}
            src={leviathan5}
            alt="leviathan-5"
            className="leviathan__body_image leviathan__body_image--5"
          />
        </div> */}

        <div className="leviathan__bottom footer__bottom small-text">
          <AnchorLink customClass="leviathan__to_top" toSection="#hero">
            HOME
          </AnchorLink>
          {/* <p>
            Trademarks belong to their respective owners. All Rights Reserved.
          </p> */}
          <p className="leviathan__bottom_copyright ">
          Ghoons_NFT 2024 ®
          </p>

          <ul className="leviathan__links footer__links">
            {FooterLinks.map((curentLink, i) => {
              const { link, title } = curentLink;
              return (
                <li key={i}>
                  <a
                    href={pdf(title)}
                    className="leviathan__bottom_link"
                    download
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </FullWidthBg>
    </section>
  );
};

export default Leviathan;
