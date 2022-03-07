
import React, { useState } from 'react';
import { ProjectsContext } from '../Context/ProjectsContext';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ComponentsPanel from '../sections/ComponentsPanel';
import DesignerPanel from '../sections/DesignerPanel';
import CollapsibleSidebar from '../sections/CollapsibleSidebar';
import Header from '../components/Header'

const components = [
  { name: "Pixel", id: "pixelID" },
  { name: "Layout", id: "layoutID" },
  { name: "Rectangle", id: "rectID" },
  { name: "Circle", id: "circleID" },
  { name: "Text", id: "textID" },
  { name: "Triangle", id: "triangleID" },
  { name: "Image", id: "imageID" },
];


const LayoutDesigner = () => {

    const [screenSize, setScreenSize] = useState([]);

    const [widgetValue, setWidgetValue] = useState(0)

  return (
    <div>
      <Header></Header>
      <ProjectsContext.Provider value={{ setScreenSize, screenSize, widgetValue, setWidgetValue }}>
      <div className="main-frame">
      
        <div className="row">
          <div className="col-4 components-panel">
            
              <ComponentsPanel components={components} />

          </div>
          
          <div className="col-8 designer-panel text-right">

              <DesignerPanel /> 
              
          </div>
        </div>
       
      </div>
      </ProjectsContext.Provider>  

    </div>
  )
}

export default LayoutDesigner