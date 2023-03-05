/* Mounted logic */ 
const 
  ContainerIndicator = document.querySelector('.carousel__container-indicator'),
  ContainerItem = document.querySelector('.carousel__container-item'),

  templateIndicator = document.getElementById( 'carousel-indicator' ),
  indicator = templateIndicator.content.querySelector( 'div' ),

  templatelItem = document.getElementById( 'carousel-item' ),
  item = templatelItem.content.querySelector( 'div' ),
  title = templatelItem.content.querySelector( 'p' ),

  arrItems = [
    { title: '(＠＾◡＾)', color: 'red' },
    { title: '(＾▽＾)', color: 'yellow' },
    { title: '(─‿‿─)', color: 'green' },
    { title: '╰(▔∀▔)╯', color: 'blue' },
    { title: '( ´ ▽ ` )', color: 'orange' }
  ];

arrItems.forEach( ( el, index ) => {
  item.style.backgroundColor = el.color
  title.textContent = el.title

  index === 0 
    ? indicator.classList.remove( 'disabled' )
    : indicator.classList.add( 'disabled' )

  let 
    cloneIndicator = templateIndicator.content.cloneNode( true ),
    cloneItem = templatelItem.content.cloneNode( true );

  ContainerIndicator.append( cloneIndicator )
  ContainerItem.append( cloneItem )
})



/* Button logic */
const 
  arrMountedItems = document.querySelectorAll( '.carousel__item' ),
  nextBtn = document.querySelector( '.carousel__btn_next' ),
  prevBtn = document.querySelector( '.carousel__btn_prev' );

let currentItem = 0;

nextBtn.addEventListener( 'click', e => {
  currentItem + 1 < arrMountedItems.length && currentItem++
  updateItems()
})

prevBtn.addEventListener( 'click', e => {
  currentItem - 1 > -1 && currentItem--
  updateItems()
})



/* Indicator logic */
const arrMountedIndicator = document.querySelectorAll( '.carousel__indicator' )
arrMountedIndicator.forEach( ( el, index ) => {
  el.addEventListener( 'click', el => {
    currentItem = index
    updateItems()
  })
})



/* Update logic */
const updateItems = () => {
  arrMountedItems.forEach( el => el.style.transform = `translateX( -${ currentItem * 100 }% )` )
  arrMountedIndicator.forEach( ( el, index ) => {
    if( currentItem === index ) el.classList.remove( 'disabled' )
    else el.classList.add( 'disabled' )
  })

  if( currentItem + 1 > arrMountedItems.length - 1  ) {
    nextBtn.setAttribute( 'disabled', true )
    prevBtn.removeAttribute( 'disabled' )
  } else if( currentItem - 1 < 0 ) {
    prevBtn.setAttribute( 'disabled', true )
    nextBtn.removeAttribute( 'disabled' )
  } else {
    nextBtn.removeAttribute( 'disabled' )
    prevBtn.removeAttribute( 'disabled' )
  }
}
