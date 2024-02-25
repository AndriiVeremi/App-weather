export const BackgroundApp = ({ background }) => {

  const rootBg = document.querySelector('body');
  const numImages = Math.floor(Math.random() * 5)

  if (background.length !== 0) {
    rootBg.style.backgroundImage = `url(${background[numImages].largeImageURL})`;
    rootBg.style.backgroundSize = 'cover';
  }
};
