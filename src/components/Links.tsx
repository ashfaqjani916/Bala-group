import "../css/links.css"
import { RiLinksLine } from "react-icons/ri";


const Links = () => {
  return (
    
    <div className="links">

      <div className="links-content">
      <div className="heading">
        <RiLinksLine style={{fontSize:"40px",paddingTop:"10px",color:"#034456"}} />
          <h1>Some Usefull Links</h1>
      </div>
      <div className="linkcards">
      <div className="ag-format-container">
     <div className="ag-courses_box">
      <div className="ag-courses_item">
        <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          UI/Web&amp;Graph design for teenagers 11-17&#160;years old
        </div>

      </a>
    </div>

    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          UX/UI Web-Design&#160;+ Mobile Design
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Annual package "Product+UX/UI+Graph designer&#160;2022"
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Graphic Design
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Motion Design
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            30.11.2022
          </span>
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Front-end development&#160;+ jQuery&#160;+ CMS
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg">
        </div>
        <div className="ag-courses-item_title">
          Digital Marketing
        </div>
      </a>
    </div>

    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Interior Design
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            31.10.2022
          </span>
        </div>
      </a>
    </div>

  </div>
</div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Links