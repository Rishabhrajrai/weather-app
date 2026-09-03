import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
       const INIT_URL ="https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.webp?a=1&b=1&s=612x612&w=0&k=20&c=M-M-0G2h5claKSoJDulPHau74xPvqheMVp7Xg0WjaZ8=";
     
       const HOT_URL="https://media.istockphoto.com/id/473139270/photo/sunset-with-bright-sun.jpg?s=612x612&w=0&k=20&c=fdmd-nRYfUDM4GSN16GshBr4e7bi0ybLqwz76adBZ_w=";
       const COLD_URL="https://media.istockphoto.com/id/1130385711/photo/closeup-chestnut-shell-half-engulfed-in-clear-ice-hanging-from-a-tree-branch-in-a-park-in.jpg?s=612x612&w=0&k=20&c=K2RDaw-P4l000QWPU5z8YGeWPFXYDrc4g48eeEpXeCk=";
       const RAIN_URL="https://media.istockphoto.com/id/90682566/photo/rain-drops.jpg?s=612x612&w=0&k=20&c=caN6zLc1QqK_TqXLcpofHrpMpvV6Vmj1sfQgd3o60-c=";
    
    
       return (
        <div className="InfoBox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>=80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity>=80 ?<ThunderstormIcon/> : info.temp >15 ? <SunnyIcon /> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <p>Min Temp ={info.tempMin}&deg;C</p>
          <p>Max Temp ={info.tempMax}&deg;C</p>
          <p>the weather can be described as <i>{info.weather}</i> and feels like ={info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    );
}