import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Selects = () => {
    const folder = useSelector(state => state.folder.folder);
    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                    <MenuItem value="">
                        <em>Выберите папку</em>
                    </MenuItem>
                    {folder.map((item, index) => (
                        <MenuItem
                            key={index}
                            value={item.title}>{item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}
export { Selects }