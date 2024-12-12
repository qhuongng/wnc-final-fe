import Link from "next/link";
import ClientComponent from "@/app/ClientComponent";

const fetchCoffee = async () => {
    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await response.json();

    return data[0];
};

const Home = async () => {
    const coffee = await fetchCoffee();

    return (
        <div className="w-[calc(100vw-34px)] p-12 overflow-x-hidden">
            <div className="flex justify-between items-start">
                <h1>WNC Next.js Frontend Template 🎉</h1>

                <button className="btn btn-accent">
                    <Link className="no-underline font-bold" href="/example-route">
                        Warp
                    </Link>
                </button>
            </div>

            <p>
                This is a Next.js project template with{" "}
                <b>TypeScript, TailwindCSS, DaisyUI, Redux and React Hook Form</b> all set up for
                you. What you&apos;re currently seeing is the <b>Home</b> component, rendered by the{" "}
                <code>page.tsx</code> file inside the <code>app</code> directory. Below is a small
                demo that puts all the dependencies to work.
            </p>

            <div className="flex gap-8">
                <ClientComponent />

                <div className="flex flex-col">
                    <p>
                        With Next.js 13 and above, you can fetch data inside server components (this
                        template uses Next 14.2.8, because I don&apos;t want sudden breaking changes
                        while doing my finals thank you very much). Below is a coffee fetched from{" "}
                        <code>sampleapis.com</code>. The styling for card it's presented in, as well
                        as the text input and button from the left are provided by DaisyUI.
                    </p>

                    <div className="not-prose max-h-96 card card-side bg-base-200">
                        <figure>
                            <img className="max-w-24" src={coffee.image} alt={coffee.title}></img>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title not-prose">{coffee.title}</h2>
                            <p>{coffee.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Helpful resources</h2>

            <ul>
                <li>
                    For more info on routing (i.e. dynamic routes), loading and streaming, SSR
                    patterns, etc., check out{" "}
                    <a target="_blank" href="https://nextjs.org/docs" rel="noopener noreferrer">
                        Next.js documentation
                    </a>
                    .
                </li>

                <li>
                    For how to style things, install the{" "}
                    <a
                        target="_blank"
                        href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
                        rel="noopener noreferrer"
                    >
                        TailwindCSS Intellisense extension
                    </a>{" "}
                    (if you're using VSCode). Also check out{" "}
                    <a
                        target="_blank"
                        href="https://daisyui.com/docs/use/"
                        rel="noopener noreferrer"
                    >
                        DaisyUI
                    </a>{" "}
                    and{" "}
                    <a
                        target="_blank"
                        href="https://tailwindcss.com/docs"
                        rel="noopener noreferrer"
                    >
                        TailwindCSS documentation
                    </a>
                    .
                </li>

                <li>
                    For state management, check out{" "}
                    <a target="_blank" href="https://redux.js.org/usage/" rel="noopener noreferrer">
                        Redux Toolkit documentation
                    </a>
                    .
                </li>

                <li>
                    For form validation, check out{" "}
                    <a
                        target="_blank"
                        href="https://www.react-hook-form.com/get-started/"
                        rel="noopener noreferrer"
                    >
                        React Hook Form documentation
                    </a>
                    .
                </li>
            </ul>
        </div>
    );
};

export default Home;
