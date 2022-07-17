import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

export default function Header(){
        const [dropdownHidden,setdropdown] = useState(true);

        const Anchor = props => {
        
        const {name} = props;
        const anchorClass = props.anchorClass
        const anchorId = props.anchorId;
        const url_bgImage = props.url_bgImage;
        const anchorHref = props.anchorHref;
        const anchorDataTrigger = props.anchorDataTrigger;
        const innerHTMLText = props.innerHTMLText;

        // booleans
        const hasDropDown = props.hasDropDown;
        const hasRightArrow = props.hasRightArrow;
        const isTemplateCat = props.isTemplateCat; 
        const isResumeExample = props.isResumeExample;
        const showAllExamples = props.showAllExamples;

        // Events
        const dropTheResumeLink = props.onmouseenter;
        const hideTheResumeLink = props.onmouseleave;
        
        // nav__templates
        const templateCatName = props.templateCatName;
        const datalazybg = props.datalazybg; 
        const templateCatSubtitle = props.templateCatSubtitle;
        const urlImage = props.urlImage;

        // Resume-Examples
        const resumeExampleName = props.resumeExampleName;

        // DropDown-Sidebar-Link
        const sideBarLink = props.sideBarLink;


        return <Link aria-label={name} className={anchorClass} id={anchorId} data-trigger={anchorDataTrigger} style={{backgroundImage:(url_bgImage)}} onMouseOver={dropTheResumeLink} onMouseOut={hideTheResumeLink} to={anchorHref}>
          
          {hasRightArrow?<ArrowForwardIosIcon style={{fontSize: 18}} className="nav__template-cat-arrow"/>:null}

          {isResumeExample?
          <div className="nav__example-item-name">
            {resumeExampleName} 
          </div>
          :null
          }

          {sideBarLink?
          <div className="nav__dropdown-sidebar-visual is-image-loaded"
          data-lazy-bg={props.datalazybg}
          style={{backgroundImage:(urlImage)}}
          ></div>
          :null 
          }

          {sideBarLink?
          <div className="nav__dropdown-sidebar-content">
          <div className="nav__dropdown-sidebar-title">Resume Builder</div>
          <div className="nav__dropdown-sidebar-subtitle">
          Build powerful resumes in only 5&nbsp;minutes with our easy to use Resume Builder and get hired faster.
          </div>
          <div className="nav__dropdown-action">
            Get Started Now
            <ArrowForwardIosIcon style={{fontSize: 18, marginLeft:15, marginTop:4}}/>
          </div>
          </div>
          :null
          }

          {isTemplateCat?
          <div className="nav__template-cat-title">
            <div className="nav__template-cat-icon is-image-loaded" data-lazy-bg={datalazybg} style={{backgroundImage:(urlImage)}}>
            </div>
            {templateCatName}
            <div className="nav__template-cat-subtitle">
            {templateCatSubtitle}
            </div>
          </div>
          :null
          }

          

          {innerHTMLText}

          {showAllExamples?
          <ArrowForwardIosIcon style={{fontSize: 18, marginLeft:15, marginTop:5}}/>
          :null
          }

          {hasDropDown?<KeyboardArrowDownIcon style={{fontSize: 20,marginTop: 5}}/>:null}

        </Link>
      }


      function showDropDown(){
        console.log(dropdownHidden);
        const hidden_element = document.getElementById("nav__drop-down")
        const resumeLink = document.getElementById("resumeLink");
        const resumeDropDown = document.getElementById("resumeDropDown");
        const header = document.getElementById("header");

        hidden_element.classList.remove("is-hidden");
        hidden_element.classList.add("is-visible");

        resumeLink.classList.add("is-content-active");
        resumeDropDown.classList.add("is-visible");

        header.classList.add("is-dropdown-visible","headroom-frozen");
        setdropdown(true);
      }

      
      function hideDropDown(){
        console.log(dropdownHidden);
        const resumeDropDown = document.getElementById("resumeDropDown");
        const hidden_element = document.getElementById("nav__drop-down")
        const header = document.getElementById("header");

        hidden_element.classList.remove("is-visible");
        hidden_element.classList.add("is-hidden");

        resumeDropDown.classList.remove("is-visible");

        header.classList.remove("is-dropdown-visible","headroom-frozen");
        setdropdown(false);
      }
    function keepShowing(){
      if(dropdownHidden){
        showDropDown();
      }
    }

    return(   
      <header className="nav headroom" id="header">
        <div className="nav__content">
            <div className="nav__bar">
            <Anchor anchorClass="nav__bar-logo" url_bgImage="url('https://s3.resume.io/uploads/country/logo_default/2/for-light-bg.svg')" anchorHref="/"/>
            <nav className="nav__bar-menu">
              <Anchor anchorClass="nav__bar-link" onmouseenter={showDropDown} onmouseleave={hideDropDown}innerHTMLText="Resume" anchorHref="/resume-templates" anchorId="resumeLink" anchorDataTrigger="resume" hasDropDown={true}/>
              <Anchor anchorClass="nav__bar-link" innerHTMLText="Blog" anchorHref="#"/>
              <Anchor anchorClass="nav__bar-link" innerHTMLText="FAQ" anchorHref="#"/>

              <div className="nav__bar-separator"></div>

              <div className="nav__bar-auth">
                <Anchor anchorClass="nav__bar-auth-link" innerHTMLText="Log In" anchorHref="#"/>
                <Anchor anchorClass="button" innerHTMLText="Sign Up" anchorHref="#"/>
              </div>
            </nav>
      
            </div>
            <div className="nav__dropdown is-hidden" id="nav__drop-down" onMouseEnter={keepShowing} onMouseLeave={hideDropDown} style={{height: 415}}>
              <div className="nav__document nav__dropdown-content nav__document--resume" id="resumeDropDown" data-content ="resume">
                <div className="nav__document-container nav__dropdown-container">
                  <div className="nav__document-main">
                    <div className="nav__document-templates">
                      <div className="nav__dropdown-header">
                        <Anchor anchorClass="nav__dropdown-header-title" anchorHref="/resume-templates" innerHTMLText="Resume Templates"/>          
                        <Anchor anchorClass="nav__dropdown-header-link" anchorHref="/resume-termplates" innerHTMLText="View All"/>
                      </div>
                      <nav className="nav__template-cats">

                      <Anchor anchorClass="nav__template-cat" anchorHref="/resume-templates/simple" urlImage="url('https://resume.io/assets/template_category_icons/24x24/simple-50b769b9397b18d9d7c47f81f7423f6c8d81f83384855f9042b7e8fd70aa018c.svg')"
                      datalazybg="client\src\assets\svg\simple.svg"
                      templateCatSubtitle = "Clean, timeless templates with a classic balanced structure. A perfect basic canvas"
                      templateCatName="Simple"
                      isTemplateCat={true}hasRightArrow={true}/>
                       
                      <Anchor anchorClass="nav__template-cat" anchorHref="/resume-templates/proffessional" urlImage="url('https://resume.io/assets/template_category_icons/24x24/professional-67dc037c914458e9de4d781247801b17fe0a5d1f8bd6b7d70ca4845a0a619e08.svg')"
                      datalazybg="client\src\assets\svg\simple.svg" 
                      templateCatSubtitle = "Job-winning templates to showcase professionalism, dependability and expertise"
                      templateCatName="Professional"
                      isTemplateCat={true}hasRightArrow={true}/>

                      <Anchor anchorClass="nav__template-cat" anchorHref="/resume-templates/modern" urlImage="url('https://resume.io/assets/template_category_icons/24x24/modern-7739d9b1ac29c5fcea4fbf3d67a371e16a9613abd183b906df158087529b8e1c.svg')"
                      datalazybg="client\src\assets\svg\simple.svg" 
                      templateCatSubtitle = "A current and stylish feel for forward-thinking candidates in innovative fields"
                      templateCatName="Modern"
                      isTemplateCat={true}hasRightArrow={true}/>

                      <Anchor anchorClass="nav__template-cat" anchorHref="/resume-templates/creative" urlImage="url('https://resume.io/assets/template_category_icons/24x24/creative-e98731a46451f10e9bcbc15ad92c1163e87724430eb0040c90a40b17168155f2.svg')"
                      datalazybg="client\src\assets\svg\simple.svg" 
                      templateCatSubtitle = "A bold, original feel perfect for artistic fields and contemporary companies"
                      templateCatName="Creative"
                      isTemplateCat={true}hasRightArrow={true}/>

                      </nav>
                    </div>
                    <div className="nav__document-examples">
                      <div className="dropdown-header">
                        <Anchor anchorClass="nav__dropdown-header-title" anchorHref="/resume-examples" innerHTMLText="Resume Examples"/>
                      </div>
                      <nav className="nav__examples">
                        <Anchor anchorClass="nav__examples-item" anchorHref="/resume-examples/government" isResumeExample={true}resumeExampleName="Government"/>
                        <Anchor anchorClass="nav__examples-item" anchorHref="/resume-examples/engineering" isResumeExample={true}resumeExampleName="Engineering"/>
                        <Anchor anchorClass="nav__examples-item" anchorHref="/resume-examples/medical" isResumeExample={true}resumeExampleName="Medical"/>
                        <Anchor anchorClass="nav__examples-item" anchorHref="/resume-examples/retail" isResumeExample={true}resumeExampleName="Retail"/>
                        <Anchor anchorClass="nav__examples-item" anchorHref="/resume-examples/legal" isResumeExample={true}resumeExampleName="Legal"/>
                        <Anchor anchorClass="nav__examples-action nav__dropdown-action" anchorHref="/resume-examples"
                        showAllExamples = {true}
                        innerHTMLText="All Examples"/>
                      </nav>
                    </div>
                  </div>
                  <div className="nav__dropdown-sidebar">
                    <Anchor anchorClass="nav__dropdown-sidebar-link" anchorHref="/resume-templates" 
                    urlImage="url('https://resume.io/assets/landing/nav/resume_sidebar-a892f99d2e28c2b866dba6059ddf7122cd9a4a41716801c096fd9922888e2398.svg')"
                    datalazybg="https://resume.io/assets/landing/nav/resume_sidebar-a892f99d2e28c2b866dba6059ddf7122cd9a4a41716801c096fd9922888e2398.svg"
                    sideBarLink={true}
                    />
                    
                  </div>
                </div>

              </div>
            </div>
        </div>
      </header>
    )
}
