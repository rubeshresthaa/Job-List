

export const setFavourites =(favourites)=>{
  localStorage.setItem('favourites',JSON.stringify(favourites));
}

export const getFromFavourites=()=>{
  const favourites=localStorage.getItem('favourites');
  return favourites ? JSON.parse(favourites) : [];
}
