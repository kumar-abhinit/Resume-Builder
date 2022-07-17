import React from "react";
import {Link} from "react-router-dom";

export default function ResumeTemplates(){
    const Anchor= props =>{
        const anchorClass = props.anchorClass;
        const anchorHref = props.anchorHref;
        const innerHTMLText = props.innerHTMLText;
        const templateIconSVG = props.templateIconSVG;

        // Booleans
        const hastemplateIcon = props.hastemplateIcon;

        return<Link to={anchorHref} anchorClass={anchorClass}>
            {hastemplateIcon?
            <div className="templates-filter__tab-icon" style={{backgroundImage:(templateIconSVG)}}></div>
            :null
            }
            {innerHTMLText}
        </Link>
    }
    return(
        <div className="container container--templates">
            <div className="templates-root">
                <div className="templates-root__conntainer">
                    <div className="templates-root__header">
                        <h1 className="templates-root__header-title">Job-winning resume templates</h1>
                        <p className="templates-root__header__subtitle">Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
                        <div className="templates-root__action">
                        <Anchor anchorClass="templates-root__header-button button" anchorHref="/create-resume"/>
                        </div>
                    </div>
                    <div className="templates-filter">
                        <div className="templates-filter__container">
                        <div className="templates-filter__content">
                            <div className="templates-filter__tabs">
                                <div className="templates-filter__tabs-selector"></div>
                                <Anchor anchorClass="templates-filter__tab" hastemplateIcon={true} anchorHref="/resume-templates" innerHTMLText="All templates" templateIconSVG=""/>
                                <Anchor anchorClass="templates-filter__tab" hastemplateIcon={true} anchorHref="/resume-templates/simple" innerHTMLText="Simple" templateIconSVG="url('https://resume.io/assets/template_category_icons/24x24/simple-50b769b9397b18d9d7c47f81f7423f6c8d81f83384855f9042b7e8fd70aa018c.svg')"/>
                                <Anchor anchorClass="templates-filter__tab" hastemplateIcon={true} anchorHref="/resume-templates/professional" innerHTMLText="Professional" templateIconSVG="url('https://resume.io/assets/template_category_icons/24x24/professional-67dc037c914458e9de4d781247801b17fe0a5d1f8bd6b7d70ca4845a0a619e08.svg')"/>
                                <Anchor anchorClass="templates-filter__tab" hastemplateIcon={true} anchorHref="/resume-templates/modern" innerHTMLText="Modern"templateIconSVG="url('https://resume.io/assets/template_category_icons/24x24/modern-7739d9b1ac29c5fcea4fbf3d67a371e16a9613abd183b906df158087529b8e1c.svg')"/>
                                <Anchor anchorClass="templates-filter__tab" hastemplateIcon={true} anchorHref="/resume-templates/creative" innerHTMLText="Creative" templateIconSVG="url('https://resume.io/assets/template_category_icons/24x24/creative-e98731a46451f10e9bcbc15ad92c1163e87724430eb0040c90a40b17168155f2.svg')"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="template-root-grids">
                    
                    </div>
                </div>
            </div>
        </div>
    )
}