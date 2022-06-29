import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <main  className="mx-auto space-y-4 max-w-2xl">

      <h1 className="text-4xl mt-4 mb-2 text-center capitalize">Simplified version of the tailwindcss nav</h1>
    
      <div className="mx-5">
        <p>This is just taken from the &quot;Centred with bottom border&quot; header from <a
        className="text-blue-500"
        href="https://tailwindui.com/components/marketing/elements/headers" target="_blank" rel="noreferrer">here</a>, but simplified for use on smaller sites.</p>
        <p>I found myself reusing this menu quite a bit but only needing the skimmed down version. (Though I do like the original). </p>
        <h3 className='text-2xl'>This uses:</h3>
        <ul>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
          <li>@headlessui/react</li>
          <li>@heroicons/react/outline</li>
        </ul>
        <h2 className='text-3xl'>How to use:</h2>
        <h3 className="2xl">Two options</h3>
        <p>1. Download full site from Github <a
        className="text-blue-500"
        href="https://github.com/connherf/tailwind-nextjs-nav" target="_blank" rel="noreferrer">here</a></p>
        <p>2. Copy the Nav.js file to your components directory and assuming you already have your Next.js app configured with Tailwind CSS, just do:</p>
        <ul>
          <li>npm install @headlessui/react</li>
          <li>npm install @heroicons/react</li>
        </ul>
        <h2 className='text-3xl'>Changing Icons</h2>
        <p>The full list of icon names can be found <a
        className="text-blue-500"
        href="https://unpkg.com/browse/@heroicons/react@1.0.6/outline/" target="_blank" rel="noreferrer">here</a>.</p>
      </div>
     
      </main>
    </div>
  )
}
