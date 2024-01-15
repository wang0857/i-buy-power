
import Slider from './components/Sliders/Slider'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { data } from './data'

export default function Home() {

  return (
    <main className="flex flex-col items-center mt-5">
      <h2 className="md:text-xl text-lg text-center font-bold mb-1.5">Best Seller Gaming PC</h2>
      <h3 className="md:text-lg text-md font-bold ">Prebuilt & Custom</h3>
      <Slider data={data} />
    </main>
  )
}
