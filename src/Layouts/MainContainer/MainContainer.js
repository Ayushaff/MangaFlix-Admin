import { memo, useEffect } from 'react';
import { useObserver } from '../../Hooks/observer';
import { useDispatch, useSelector } from 'react-redux';

const MainContainer = memo(({ children, mainClasses = '', containerClasses = '', isHeaderBlack = false , pageTitle = '',}) => {
    const [observerStatus, setObserverRef] = useObserver({threshold: 0});
    const theme = useSelector((state) => state.theme);
    useEffect(() => {
        const headerPlug = document.querySelector('.header-plug');
        setObserverRef(headerPlug);
        //console.log("---->"+pageTitle);
    }, []);

    useEffect(() => {
        if (!observerStatus) {
            toggleStyles('add');
        } else {
            toggleStyles('remove');
        }
        return () => {
            toggleStyles('remove');
        }
        //console.log("-->"+theme);
    }, [observerStatus]);

    const toggleStyles = (type) => {
        // type='remove';
        const header = document.querySelector('.header-block');

        const addStyles = () => {
            header?.classList.remove('header-white');
            if (isHeaderBlack) {
                header?.classList.add('header-transparent-black');
            } else {
                header?.classList.add('header-transparent');
            }
        }

        const removeStyles = () => {
            if (isHeaderBlack) {
                header?.classList.remove('header-transparent-black');
            } else {
                header?.classList.remove('header-transparent');
            }
            header?.classList.add('header-white');
        }
        
        if (type === "add") addStyles(); else removeStyles();
    }

    return (
        <main className={mainClasses} style={{
            

            background : pageTitle === "Advanced Search" ? "linear-gradient(180deg, "+theme.colors.trendingManga+" 160px, "+theme.colors.body+" 160px, "+theme.colors.body+" 100%)":
            pageTitle === "Suggestions" ? "linear-gradient(180deg, "+theme.colors.trendingManga+" 420px, "+theme.colors.body+" 420px, "+theme.colors.body+" 100%)" 
            : "linear-gradient(180deg, "+theme.colors.trendingManga+" 400px, "+theme.colors.body+" 400px, "+theme.colors.body+" 100%)",
        }}>
            
            <div className={containerClasses} >
            
                { children }
            </div>
        </main>
    );
});

export default MainContainer;