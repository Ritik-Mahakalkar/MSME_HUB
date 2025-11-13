// 'use client';

// import { useState } from "react";
// import Icons from "./Icons";
// import DrawerOpener from "./DrawerOpener";

// const SearchModal = ({title, placeholder}: { title: string, placeholder: string }) => {
//     const [query, setQuery] = useState('');

//     const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();

//         // add your custom functionality here
//     }

//     return(
//         <>
//           <DrawerOpener
//             cls="header-search search-open svg-wrapper"
//             data-drawer=".modal-search"
//           >
//             <Icons.Search />
//           </DrawerOpener>
          
//           <modal-search className="theme-modal modal-search">
//               <div className="modal-container">
//                 <div className="modal-header">
//                   <DrawerOpener
//                     cls="search-close svg-wrapper"
//                     data-drawer=".modal-search"
//                   >
//                     <Icons.CloseCircle />
//                   </DrawerOpener>
//                 </div>
                
//                 <div className="modal-main flex items-center justify-center">
//                   <form
//                     className="form-search flex items-center justify-center flex-wrap"
//                     onSubmit={handleForm}
//                   >
//                     <label htmlFor="Search" className="text text-30">{title}</label>
//                     <input
//                       type="text"
//                       placeholder={placeholder}
//                       name="search"
//                       id="Search"
//                       className="text text-16"
//                       autoComplete="off"
//                       value={query}
//                       onChange={(e) => setQuery(e.target.value)}
//                     />
//                     <button
//                       className="button button--primary"
//                       type="submit"
//                       aria-label="Search"
//                     >
//                       <span className="svg-wrapper">
//                         <Icons.Search />
//                       </span>
//                     </button>
//                   </form>
//                 </div>
//               </div>
//           </modal-search>
//         </>
//     )
// }

// export default SearchModal;


// 'use client';

// import { useState } from "react";
// import Icons from "./Icons";
// import DrawerOpener from "./DrawerOpener";
// import Menus from "@/data/mainMenuList"; // ✅ import your main menu list file

// const SearchModal = ({ title, placeholder }: { title: string, placeholder: string }) => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState<{ title: string; path: string; text?: string }[]>([]);

//   const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!query.trim()) {
//       setResults([]);
//       return;
//     }

//     // ✅ Collect all possible searchable items from Menus (including nested dropdowns)
//    const extractItems = (menuList: any[]): any[] => {
//   let items: any[] = [];

//   menuList.forEach((menu) => {
//     if (menu?.title && menu?.path) {
//       items.push({ title: menu.title, path: menu.path, text: menu.text || "" });
//     }

//     // ✅ Check dropdown recursively
//     if (Array.isArray(menu?.dropdown)) {
//       items = items.concat(extractItems(menu.dropdown));
//     }

//     // ✅ Check megamenutwocolumn safely
//     if (Array.isArray(menu?.megamenutwocolumn)) {
//       menu.megamenutwocolumn.forEach((col: any) => {
//         if (Array.isArray(col?.dropdown)) {
//           items = items.concat(extractItems(col.dropdown));
//         }
//       });
//     }
//   });

//   return items;
// };

//     const allItems = extractItems(Menus);

//     // ✅ Filter items by search query (case insensitive)
//     const filtered = allItems.filter((item) =>
//       item.title.toLowerCase().includes(query.toLowerCase())
//     );

//     setResults(filtered);
//   };

//   return (
//     <>
//       <DrawerOpener
//         cls="header-search search-open svg-wrapper"
//         data-drawer=".modal-search"
//       >
//         <Icons.Search />
//       </DrawerOpener>

//       <modal-search className="theme-modal modal-search">
//         <div className="modal-container">
//           <div className="modal-header">
//             <DrawerOpener
//               cls="search-close svg-wrapper"
//               data-drawer=".modal-search"
//             >
//               <Icons.CloseCircle />
//             </DrawerOpener>
//           </div>

//           <div className="modal-main flex items-center justify-center">
//             <form
//               className="form-search flex items-center justify-center flex-wrap"
//               onSubmit={handleForm}
//             >
//               <label htmlFor="Search" className="text text-30">{title}</label>
//               <input
//                 type="text"
//                 placeholder={placeholder}
//                 name="search"
//                 id="Search"
//                 className="text text-16"
//                 autoComplete="off"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
//               <button
//                 className="button button--primary"
//                 type="submit"
//                 aria-label="Search"
//               >
//                 <span className="svg-wrapper">
//                   <Icons.Search />
//                 </span>
//               </button>

//               {/* ✅ Results displayed below input */}
//               {results.length > 0 && (
//                 <ul style={{ width: "100%", marginTop: "1rem", textAlign: "center" }}>
//                   {results.map((item, index) => (
//                     <li key={index} style={{ padding: "4px 0", fontSize: "16px" }}>
//                       <a href={item.path} style={{ textDecoration: "none", color: "inherit" }}>
//                         <strong>{item.title}</strong>
//                         {item.text && <div style={{ fontSize: "14px" }}>{item.text}</div>}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {query && results.length === 0 && (
//                 <p style={{ width: "100%", marginTop: "1rem", textAlign: "center", fontSize: "16px" }}>
//                   No results found
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </modal-search>
//     </>
//   );
// };

// export default SearchModal;



'use client';

import { useState } from "react";
import Icons from "./Icons";
import DrawerOpener from "./DrawerOpener";
import Menus from "@/data/mainMenuList"; // ✅ import your main menu list file

const SearchModal = ({ title, placeholder }: { title: string, placeholder: string }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ title: string; path: string; text?: string }[]>([]);

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!query.trim()) {
      setResults([]);
      return;
    }

    // ✅ Collect all possible searchable items from Menus (including nested dropdowns)
    const extractItems = (menuList: any[]): any[] => {
      let items: any[] = [];

      menuList.forEach((menu) => {
        if (menu?.title && menu?.path) {
          items.push({ title: menu.title, path: menu.path, text: menu.text || "" });
        }

        if (Array.isArray(menu?.dropdown)) {
          items = items.concat(extractItems(menu.dropdown));
        }

        if (Array.isArray(menu?.megamenutwocolumn)) {
          menu.megamenutwocolumn.forEach((col: any) => {
            if (Array.isArray(col?.dropdown)) {
              items = items.concat(extractItems(col.dropdown));
            }
          });
        }
      });

      return items;
    };

    const allItems = extractItems(Menus);

    const filtered = allItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <>
      <DrawerOpener
        cls="header-search search-open svg-wrapper"
        data-drawer=".modal-search"
      >
        <Icons.Search />
      </DrawerOpener>

      <modal-search className="theme-modal modal-search">
        <div className="modal-container">
          <div className="modal-header">
            <DrawerOpener
              cls="search-close svg-wrapper"
              data-drawer=".modal-search"
            >
              <Icons.CloseCircle />
            </DrawerOpener>
          </div>

          <div className="modal-main flex items-center justify-center">
            <form
              className="form-search flex items-center justify-center flex-wrap"
              onSubmit={handleForm}
            >
              <label htmlFor="Search" className="text text-30">{title}</label>
              <input
                type="text"
                placeholder={placeholder}
                name="search"
                id="Search"
                className="text text-16"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="button button--primary"
                type="submit"
                aria-label="Search"
              >
                <span className="svg-wrapper">
                  <Icons.Search />
                </span>
              </button>

              {/* ✅ Results displayed immediately below input */}
              <div style={{ width: "100%", marginTop: "0.75rem", textAlign: "center" }}>
                {results.length > 0 ? (
                  <ul>
                    {results.map((item, index) => (
                      <li key={index} style={{ padding: "4px 0", fontSize: "16px" }}>
                        <a
                          href={item.path}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <strong>{item.title}</strong>
                          {item.text && (
                            <div style={{ fontSize: "14px" }}>{item.text}</div>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  query && (
                    <p style={{ fontSize: "16px" }}>No results found</p>
                  )
                )}
              </div>
            </form>
          </div>
        </div>
      </modal-search>
    </>
  );
};

export default SearchModal;

