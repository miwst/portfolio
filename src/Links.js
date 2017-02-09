import React from 'react';
import IconButton from 'material-ui/IconButton';
// import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const styles = {
  margin: '0 auto',
  height: '40px',
  width: '40%',
  minWidth: '170px',
  display: 'flex',
  justifyContent: 'space-between',
}

const iconButtons = [
  {
    name: 'github',
    path: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
    url: 'https://github.com/miwst',
    viewbox: '0 0 30 30',
  },
  {
    name: 'freeCodeCamp',
    path: 'M16 8.212c0 1.668-.57 3.15-1.735 4.46-.423.486-.762.718-.994.718-.084 0-.17-.022-.23-.084-.064-.063-.108-.148-.108-.232 0-.126.147-.317.446-.593 1.204-1.163 1.82-2.6 1.82-4.312 0-1.9-.634-3.444-1.883-4.63-.254-.232-.38-.424-.38-.57 0-.086.04-.17.107-.233.063-.063.148-.107.232-.107.277 0 .697.34 1.227 1.013.992 1.272 1.5 2.796 1.5 4.572zM0 7.788c0-1.668.57-3.15 1.735-4.46.423-.486.762-.718.994-.718.084 0 .17.022.23.084.064.063.108.126.108.21 0 .125-.147.317-.446.612C1.418 4.68.802 6.116.802 7.83c0 1.9.634 3.443 1.883 4.63.254.23.38.422.38.57 0 .084-.04.17-.107.232-.063.062-.148.106-.232.106-.295 0-.697-.34-1.227-1.013C.485 11.107 0 9.585 0 7.788zm11.816 4.586H4.483c-.233 0-.446-.192-.446-.446s.19-.445.446-.445h7.333c.232 0 .446.19.446.445-.004.258-.192.446-.446.446zM7.81 6.42c.132-.017.23.41.242.5.03.235-.048.463-.155.67-.398.776-1.32 1.403-1.076 2.386.104.424.33.718 1.003 1.08-.232.08-.556-.074-.736-.2-.803-.545-1.312-1.44-1.26-2.416.015-.31.074-.615.158-.913.243-.855.752-1.603 1.057-2.435.148-.4.258-.884.133-1.304-.063-.206-.177-.4-.317-.567-.044-.05-.272-.316-.36-.283.397-.15.758-.01 1.108.196.265.158.475.39.637.652.295.478.42 1.03.475 1.587.022.225-.007.785.258.9.284.12.497-.35.556-.546.125-.435-.04-.844-.21-1.238.033.077.192.17.254.228.08.074.162.148.24.225.287.296.475.67.593 1.07.106.353.157.728.176 1.086.05.747-.122 1.52-.42 2.206-.133.31-.302.597-.523.847-.218.246-.505.404-.73.633.535-.545.822-1.426.748-2.092-.04-.37-.165-.714-.44-1.053 0 0 .03.236.054.39.052.332-.17.678-.43.642-.188-.027-.093-.436-.07-.565.066-.39-.023-.766-.166-1.134-.136-.345-.397-.61-.798-.55 0 .002 0 .002-.002.002h.002z',
    url: 'https://www.freecodecamp.com/miwst',
    viewbox: '0 0 20 20',
  },
  {
    name: 'codepen',
    path: 'M975.4,320.4L518.1,15.5c-11-7.3-25.3-7.3-36.2,0L24.5,320.4c-9.1,6-14.5,16.3-14.5,27.2v304.9c0,10.9,5.5,21.1,14.5,27.2l457.3,304.9c5.5,3.7,11.8,5.5,18.1,5.5c6.3,0,12.6-1.8,18.1-5.5l457.3-304.9c9.1-6,14.5-16.3,14.5-27.2V347.6C990,336.7,984.5,326.4,975.4,320.4L975.4,320.4z M500,613.2L330.2,500L500,386.8L669.7,500L500,613.2z M532.6,330.1V103.7l365.8,243.9L728.6,460.8L532.6,330.1L532.6,330.1z M467.3,330.1l-196,130.7L101.5,347.6l365.8-243.9V330.1z M212.4,500L75.3,591.4V408.6L212.4,500z M271.3,539.3l196,130.7v226.4L101.5,652.5L271.3,539.3z M532.6,669.9l196-130.7l169.8,113.2L532.6,896.3V669.9z M787.5,500l137.1-91.4v182.8L787.5,500z',
    url: 'http://codepen.io/MichaelWStuart/pens/public/',
    viewbox: '0 0 1500 1500',
  }
];

const Links = () => (
  <div style={styles}>
    {iconButtons.map((button) => (
      <IconButton
        key={button.name}
        onClick={() => window.open(button.url)}
      >
        <svg viewBox={button.viewbox} className='link'>
          <path fill='#000' d={button.path} />
        </svg>
      </IconButton>
    ))}
  </div>
);

export default Links;