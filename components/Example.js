export default function ExampleComponent({ahmet}) {
    return (
      <div> 
        {ahmet.map((e, index) => (
          <div key={e.id}>{e.item} - {index}</div>
        ))}
      </div>
    );
  }
  
  
  