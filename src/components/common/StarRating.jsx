// built in imports
import { Star } from "lucide-react";

function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-gray-300"
          }
        />
      ))}
      {reviews && (
        <span className="text-xs text-gray-400 ml-1">({reviews} reviews)</span>
      )}
    </div>
  );
}
export default StarRating;
