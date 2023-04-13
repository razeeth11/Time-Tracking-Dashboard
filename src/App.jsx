import './App.css'
import { data } from './data'

export function App() {

  return (
    <div className="App">
      <ProfileComponent/>
      <DataComponentList />
    </div>
  )
}

export function ProfileComponent(){
  return(
    <div className="profile-component">
       <div className="profile">
         <div className="profile-img">
         <img src="./src/images/image-jeremy.png" alt="profile.png" />
         </div>
         <div className="profile-name">
           <p>Report for</p>
           <h1>Jeremy robson</h1>
         </div>
       </div>
       <div className="profile-track">
         <p>Daily</p>
         <p>Weekly</p>
         <p>Monthly</p>
       </div>
    </div>
  )
}

export function DataComponentList(){
  console.log(data[2])
  return(
    <div className="data-component-list">
      {data.map((dt,index)=> <DataComponent data={dt} key={index}/> )}
    </div>
  )
}

export function DataComponent({data}){

  const style = {
    backgroundColor : data.color,
  }

  return(
    <div style={style} className="data-component">
      <img src={data.img} alt="" />
        <div className="content">
          <div className="content-one">
            <p>{data.title}</p>
            <img src="src/images/icon-ellipsis.svg" alt="" />
          </div>
          <div className="content-two">
            <h1>{data.timeframes.daily.current}hrs</h1>
            <p>Last Week - {data.timeframes.daily.previous}hrs</p>
          </div>
        </div>
    </div>
  )
}