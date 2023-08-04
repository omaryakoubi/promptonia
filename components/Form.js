import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const handlePrompt = (e) => {
    setPost({ [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="orange_gradient">{type} Post</span>
      </h1>

      <p className="desc text-left max-w-md">
        {type} & share amazing prompts with the world, and let your imagination
        run wild with any AI-powered platform.{" "}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full  max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt
          </span>
          <textarea
            name="prompt"
            value={post.prompt}
            onChange={handlePrompt}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="font-normal">(#ai #webdevelopment)</span>
          </span>
          <input
            name="tag"
            value={post.tag}
            onChange={handlePrompt}
            placeholder="Write your prompt here..."
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
