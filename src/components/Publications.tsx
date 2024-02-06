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
    <div className="works">
    <h1>Your Publications</h1>
    <ul>
      {publications.map((publication, index) => (
        <li key={index}>
          <a href="publication.doi"></a>
          <strong>{publication.title}</strong>
          <p>Journal: {publication.journal}</p>
          {/* ... other fields */}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Publications