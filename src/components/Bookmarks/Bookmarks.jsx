import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 space-y-4">
            <div className="bg-[#efedfd] border-purple-600 border-2 p-4 rounded-lg">
                <h2 className="text-[#6047EC] p-4 text-2xl font-bold">Reading Time : {readingTime}</h2>
            </div>
            <div className="bg-slate-300 rounded-lg p-4">
                <div className="p-4 font-bold">
                    <h1 className="text-2xl">Bookmarked Blogs : {bookmarks.length}</h1>
                </div>
                {
                    bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;