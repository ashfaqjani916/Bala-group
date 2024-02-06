import "../css/publications.css"
import { useEffect,useState } from "react";


interface Publications{
  title: string;
  journal: string;
  doi: string;
}

const Publications = () => {

  const [publications, setPublications] = useState<Publications[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/db.json");
        const data = await response.json();
        setPublications(data.publications);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  
  return (  
    <div className="works gap-2">
      <h1>Publications</h1>
      <ul>
      {publications.map((publication, index) => (
        <a href={publication.doi}>
        <div className ="individual-container flex shadow-xl items-center justify-between px-4">
        <li key={index}>
          <strong>{publication.title}</strong>
          <p>Journal: {publication.journal}</p>
          {/* ... other fields */}
        </li>
        <img src={`photos/Picture${index+1}.png`} alt="image" className="h-[130px] w-auto" />
        </div></a>
      ))}
    </ul>
      </div>    
  )
}

export default Publications