import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <h1><span className="bg-red-200">Still in progress. Ready Soon.</span> Simplified version of the tailwindcss nav</h1>
      <p>Based on the &quot;Centred with bottom border&quot; header from <a 
      className="text-blue-500"
      href="https://tailwindui.com/components/marketing/elements/headers" target="_blank" rel="noreferrer">here</a>.</p>
      <p>I found myself reusing this menu quite a bit but only needing the skimmed down version. (Though I do like the original). </p>

      <h3>This requires:</h3>
      <ul>
        <li>@headlessui/react: <code>npm install @headlessui/react</code></li>
        <li>@heroicons/react/outline <code>npm install @heroicons/react</code></li>
      </ul>
    </div>
  )
}
