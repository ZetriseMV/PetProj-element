import { useLocation } from 'react-router-dom';

export const usePathName = (): string => {
    const location = useLocation();
    return location.pathname.slice(1,location.pathname.length);
}