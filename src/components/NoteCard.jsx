// function NoteCard({ title, body }) {
//   return (
//     <div>
//       <h3 className="pr-8 text-[22px] font-normal break-words">{title}</h3>
//       <p className="mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]">
//         {body}
//       </p>
//       <button
//         type="button"
//         className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
//       >
//         Show more
//       </button>
//     </div>
//   )
// }
 
// export default NoteCard

import { useState } from 'react'

function NoteCard({ title, body }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>

      {showMore && (
        <p className="mt-2 text-[#949494] break-words">
          {body}
        </p>
      )}

      <button
        type="button"
        onClick={() => setShowMore((prev) => !prev)}
        className="mt-2 cursor-pointer text-sm font-normal text-[#b83f45] hover:underline"
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard