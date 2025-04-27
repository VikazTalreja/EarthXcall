import { Calendar, MapPin } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { stories } from "../data/StoriesData";



// for checking if paragrpah has any points or numbers based points
const parseParagraphWithList = (text) => {
    const lines = text.split('\n').map(line => line.trim()).filter(Boolean);

    const introLines = [];
    const listItems = [];

    let inList = false;

    lines.forEach(line => {
        if (/^\d+\.\s/.test(line)) {
            inList = true;
            listItems.push(line.replace(/^\d+\.\s/, '').trim());
        } else {
            if (!inList) {
                introLines.push(line);
            } else {
                // If the list item spans multiple lines (optional)
                if (listItems.length > 0) {
                    listItems[listItems.length - 1] += ' ' + line;
                }
            }
        }
    });

    return {
        intro: introLines.join(' '),
        listItems
    };
};

//  test example page : we want thus one

const StoryBlog = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    // const id = 1;
    const data = stories.find((story) => story.id === id);

    if (!data) {
        return (
            <div className="max-w-5xl h-[50vh] mx-auto px-4 py-8 text-center flex flex-col justify-center items-center">
                <p className="text-red-600 font-semibold text-2xl">Story not found.</p>
                <Link to="/news/stories" className="text-green-600 hover:underline mt-4 block text-xl ">Back to Blogs Page</Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 mt-20"
        >

            <button onClick={() => navigate(-1)} className="text-green-600 hover:underline">&larr; Back to News Stories </button>

            {/* Title */}
            {/* <h1 className="text-3xl font-bold mb-4 text-gray-900">{data.title}</h1> */}

            <div className="mt-4 text-center">
                <h1 className="md:text-4xl text-3xl font-bold text-green-900">{data.title}</h1>
                <div className="flex items-center justify-center gap-4 text-green-700 mt-2">
                    <span className="flex items-center gap-2"><Calendar size={18} /> {data.date}</span>
                    <span className="flex items-center gap-2"><MapPin size={18} /> {data.location}</span>
                </div>
            </div>

            {/* Poster / Thumbnail Image */}
            {data.posterImage && (
                <img
                    src={data.posterImage}
                    alt={data.title}
                    className="w-full h-auto rounded-lg mb-4 object-cover mt-2"
                />
            )}


            {/* Flexible Content Rendering */}
            <div className="w-full space-y-4 mb-10">
                {data.content.map((block, index) => {
                    if (block.type === "paragraph") {
                        const { intro, listItems } = parseParagraphWithList(block.text)
                        return (
                            <div key={index} className="space-y-3 px-2 " >
                                {block.image &&
                                    <div className="flex flex-col justify-center items-center">
                                        <img src={block.image} loading="lazy" className="md:max-w-3xl  mb-6 mt-4 rounded-md  object-cover" />
                                    </div>
                                }
                                <h2 className="text-3xl text-green-500 font-semibold " >{block.heading}</h2>
                                <p className="text-gray-700 text-lg   ">
                                    {intro}
                                </p>
                                {listItems.length > 0 && (
                                    <ol className="list-decimal list-outside space-y-4 text-gray-700 pl-8">
                                        {
                                            listItems.map((item, idx) => {
                                                if (item.includes(':')) {
                                                    const [title, ...rest] = item.split(':');
                                                    const restText = rest.join(':').trim();
                                                    return (
                                                        <li key={idx}>
                                                            <div className="flex flex-col">
                                                                <span className="font-semibold ">{title.trim()} :</span>
                                                                <span className="text-gray-600 ">{restText}</span>
                                                            </div>
                                                        </li>
                                                    );
                                                }
                                                else {
                                                    return (
                                                        <li key={idx}>
                                                            <span className="font-semibold">{item.trim()}</span>
                                                        </li>
                                                    );
                                                }
                                            })
                                        }
                                    </ol>
                                )
                                }
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default StoryBlog;
