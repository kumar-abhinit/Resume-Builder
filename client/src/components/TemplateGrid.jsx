import React from "react";
import { Link } from "react-router-dom";

export default function TemplateGrid(){
    return(
       <div className="templates-grid__cell">
        <Link className=""to="/create-resume">
            <div className="templates-card__body">
                <div className="templates-card__content">
                    <div className="templates-card__preview">
                        <img src="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1…/persistent-resource/toronto-resume-templates.jpg" alt="Template Toronto" className="templates-card__preview-image"/>
                    </div>
                </div>
            </div>
        </Link>
       </div>
    )
}