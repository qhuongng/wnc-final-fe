import Link from "next/link";

const ExampleRoute = async () => {
    return (
        <div className="w-[calc(100vw-34px)] p-12 overflow-x-hidden">
            <h1>Congrats! You found a secret route!</h1>

            <p>
                Any new directory created in the <code>app</code> directory will be treated as a new
                route as long as there is a <code>page.tsx</code> file inside it. Check out the{" "}
                <code>example-route</code> directory in the source code to see how it works.
            </p>

            <p>
                Remember, the component rendered by <code>page.tsx</code> should always be a server
                component! Define your client logic in another component and import it instead!
                Gotta get that SEO magic going!
            </p>

            <button className="btn btn-accent mt-8">
                <Link className="no-underline font-bold" href="/">
                    Warp back
                </Link>
            </button>

            <p className="text-sm mt-8">
                (Btw, I don't know why Next's Link components take so long to load. It's been a
                well-known problem for a while, so don't feel sad if your first click didn't land.
                Just click again.)
            </p>
        </div>
    );
};

export default ExampleRoute;
