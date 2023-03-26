import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 740, height: 800, overflow:"hidden", padding:"10px" }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 3x`}
            alt={item.title}
            loading="lazy"
            
          />
          <ImageListItemBar
          style={{ margin:"18px 10px"}}
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)'}}
                aria-label={`info about ${item.title}`}
                 style={{ display:"none"}}
                >
                <InfoIcon/>
              </IconButton>
            }
           
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://wallpapercave.com/wp/wp1879835.jpg',
    title: 'Pop'
  },
  {
    img: 'https://i.pinimg.com/originals/21/58/a5/2158a5f7c29fcde21a69062a49e76128.jpg',
    title: 'Rock'
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/08/02/09/25/music-2570389__340.jpg',
    title: 'Soundtrack',
  },
  {
    img: 'https://i.redd.it/hxrknqhfyjt61.jpg',
    title: 'Hip-Hop',
  }
];