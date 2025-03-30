import clsx from "clsx";
import { THEME, useTheme } from "./context/ThemeProvider";

export default function ThemeContent(){
    const {theme, toggleTheme} = useTheme();
    
    const isLightMode = theme === THEME.LIGHT;
    return <div className={clsx(
        'p-4 h-dvh w-full',
        isLightMode? 'bg-white':'bg-gray-800'
    )}>
        <h1 className={clsx(
            'text-wxl font-bold',
            isLightMode? 'text-white': 'text-black'
        )}>ThemeContent</h1>

        <p className={clsx(
            'mt-2',
            isLightMode? 'text-black': 'text-white'
        )}>안녕하세요 제 이름은 아르민 입니다 오늘 영상 뭐라는지 하나도 모르겠어요 살려주세요 제발</p>
        
    </div>;
}