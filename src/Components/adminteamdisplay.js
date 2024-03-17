import '../style.css';
const adminteamdisplay = (props) => {
  const data = props.data;
  console.log(data,props);
  return ( 
    <div className="adminteamdisplay">
    <table className='participantsTable' border={1}>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Member1</th>
          <th>Member2</th>
          <th>Member3</th>
          <th>Member4</th>
          <th>Review1</th>
          <th>Review2</th>
        </tr>
      </thead>
      <tbody>
          {data.map((x)=>(
          <tr>
            <td>{x.Team}</td>
            <td>{x.Member1}</td>
            <td>{x.Member2}</td>
            <td>{x.Member3}</td>
            <td>{x.Member4}</td>
            <tr>
              <td><a href={x.Link1}>GitHub</a></td>
              <td><a href={x.Link2}>Figma</a></td>
              <td><a href={x.Link3}>Other</a></td>
            </tr>
            <td>
              <tr>
                <td><a href={x.Link1}>GitHub</a></td>
                <td><a href={x.Link2}>Figma</a></td>
                <td><a href={x.Link3}>Other</a></td>
              </tr>
            </td>
            

            
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
   );
}

export default adminteamdisplay;