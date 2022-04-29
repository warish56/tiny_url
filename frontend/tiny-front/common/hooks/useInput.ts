import { ChangeEvent, useState } from 'react';

export const useInput = () => {
    const [value, setValue] = useState('');
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        value,
        inputProps:{
            value,
            onChange
        }
    }
}