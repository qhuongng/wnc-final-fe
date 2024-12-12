"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setName } from "@/lib/slices/exampleSlice";

type ExampleInput = {
    name: string;
};

const ClientComponent = () => {
    const dispatch = useAppDispatch();

    const name = useAppSelector((state) => state.example.name);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ExampleInput>();

    const onSubmit: SubmitHandler<ExampleInput> = (data) => {
        dispatch(setName(data.name.trim()));
        reset();
    };

    return (
        <div className="max-w-xl bg-blue-100 px-8 pb-8 pt-4 rounded-lg">
            <p>
                This gorgeous icy blue section is a <i>client component</i> rendered inside{" "}
                <b>Home</b>, which in itself is a <i>server component</i>. Try to always keep the
                component rendered by <code>page.tsx</code> a server component, and only use client
                components when you need user interactivity, or when you need to work with the Redux
                store (select a state or dispatch an action).
            </p>

            <h3>Hi, {name}</h3>

            <p>
                The heading above contains a state stored in a Redux store. Enter your name in the
                input below and hit <b>Save</b>, and the app will dispatch an action to mutate the
                state. Or try hitting <b>Save</b> without typing anything and see what happens.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Elon Musk"
                        className={`input input-bordered ${
                            errors.name ? "input-error" : ""
                        } w-full max-w-xs`}
                        {...register("name", { required: true })}
                    />

                    <button className="btn btn-primary ml-4" type="submit">
                        Save
                    </button>
                </div>

                {errors.name && (
                    <p className="not-prose text-sm mt-4 text-red-600">
                        This input is also registered to React Hook Form for validation! Type
                        something first.
                    </p>
                )}
            </form>
        </div>
    );
};

export default ClientComponent;
