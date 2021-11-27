const Card = ({ name, desc, price, img }) => {
  return (
    <div>
      <div class='max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
        <div class='px-4 py-2'>
          <h1 class='text-3xl font-bold text-gray-800 uppercase dark:text-white'>
            {name}
          </h1>
          <p class='mt-1 text-sm text-gray-600 dark:text-gray-400'>{desc}</p>
        </div>

        <img
          class='object-cover w-full h-48 mt-2'
          src={
            img
              ? img
              : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80'
          }
          alt='NIKE AIR'
        ></img>

        <div class='flex items-center justify-between px-4 py-2 bg-gray-900'>
          <h1 class='text-lg font-bold text-white'>{'$' + price}</h1>
          <button class='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card