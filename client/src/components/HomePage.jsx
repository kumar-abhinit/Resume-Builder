import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(props) {
    const Anchor = props =>{
        const {name} = props;
        const anchorHref = props.anchorHref;
        const anchorClass = props.anchorClass;
        const anchorId = props.anchorId;
        const dataIntervalEvent = props.dataIntervalEvent;
        const anchorText = props.anchorText;

        // home-page main image
        // boolean
        const hasheroImage = props.hasheroImage;
        const srcset = props.srcset;
        const alternate = props.alternate;
        const sizes = props.sizes;
        const source = props.source
        const imageClass = props.imageClass;
        const clickAction = props.clickAction;
        
        function addClasstoHeroImage(){
            const heroImage = document.getElementById(anchorId);
            heroImage.classList.add("home__hero-resume--loaded");
            heroImage.lastElementChild.style.opacity = 1;
        }

        return<Link aria-label={name} className={anchorClass} id={anchorId} data-interval-event={dataIntervalEvent} to={anchorHref} onClick={clickAction} >
        {anchorText}

        {hasheroImage?
        <img className={imageClass} src={source} sizes={sizes} alt={alternate} srcSet={srcset} onLoad={addClasstoHeroImage} />
        :null
        }

        </Link>
        
    }

    
  return (
    <div className="containter">
      <div className="home" data-locale="en">
        <div className="home__hero">
          <div className="home__hero-container">
            <div className="home__hero-main">
              <div className="home__hero-main-content">
                <h1 className="home__hero-main-title">
                  Online Resume Builder
                </h1>
                <h2 className="home__hero-title">
                Only 2% of resumes make it past the first round. Be in the top 2%
                </h2>
                <p className="home__hero-subtitle">
                Use professional field-tested resume templates that follow
                the exact &lsquo;resume rules&rsquo; employers look for. Easy to use and done within minutes
                - try now for free!
                </p>
                <div className="home__hero-cta">
                    <div className="home__hero-button">
                        <Anchor anchorClass="home__button button" dataIntervalEvent="{&quot;name&quot;:&quot;click_create_resume&quot;,&quot;label&quot;:&quot;home&quot;}" anchorHref="/resume-templates" clickAction={props.fadeonclick} anchorText="Create My Resume"/>
                    </div>
                </div>
              </div>
              <div className="home__hero-counter">
                <div className="home__hero-animated-label home__hero-counted-wrapper">
                    <div className="home__hero-counter-number">11,000</div>
                </div>
                &nbsp;resumes created today
              </div>
              <Anchor anchorClass="home__hero-resume" anchorId="hero_image" dataIntervalEvent="{&quot;name&quot;:&quot;click_hero_template&quot;,&quot;label&quot;:&quot;home&quot;}" anchorHref="/resume-templates" hasheroImage={true}
              srcset="https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=0.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 385w, https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=0.75,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 578w, https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.0,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 770w, https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 1155w"
              sizes="(max-width: 767px) 385px, 770px" alternate="Create My Resume"
              imageClass="home__hero-resume-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
