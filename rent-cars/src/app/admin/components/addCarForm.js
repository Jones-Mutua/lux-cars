import React from 'react';
import { useState } from 'react';
import { Image, Box, Heading, Input, Textarea, Label, Button } from 'theme-ui';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddCarForm = () => {
  const [image, setImage] = useState(null);
  const [createObjectUrl, setCreatObjectUrl] = useState(null);
  const [name, setName] = useState('');
  const [gas, setGas] = useState('');
  const [mileage, setMileage] = useState('');
  const [gearType, setGearType] = useState('');
  const [dailyPrice, setDailyPrice] = useState('');
  const [monthlyPrice, setMonthlyPrice] = useState('');
  const history = useHistory();

  const uploadToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreatObjectUrl(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append('thumbnailSrc', image);
    body.append('name', name);
    body.append('gearType', gearType);
    body.append('gas', gas);
    body.append('mileage',Number( mileage));
    body.append('dailyPrice', Number(dailyPrice));
    body.append('monthlyPrice', Number(monthlyPrice));

    try {
      await axios.post('http://localhost:2500/api/car', body);
      history.push('/rentals');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
    onClick={uploadToClient}
      as="form"
      enctype="multipart/form-data"
      sx={{
        width: '50%',
        margin: 'auto',
      }}
      onSubmit={uploadToServer}
    >
      <Heading
        as="h2"
        sx={{
          fontSize: 5,
        }}
      >
        Add Product
      </Heading>

      <Image
        src={createObjectUrl}
        alt="thumbnailSrc"
        sx={{
          height: '400px',
          width: '400px',
        }}
      />
      <Label m={2}>Select Image</Label>
      <Input
        type="file"
        onChange={uploadToClient}
        name="thumbnailSrc"
        id="thumbnailSrc"
       
        
        
      />
      <Label m={2}>product name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        value={name}
        m={3}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <Label m={2}>product mileage</Label>
      <Input
        type="text"
        name="name"
        id="name"
        value={mileage}
        m={3}
        required
        onChange={(e) => setMileage(e.target.value)}
      />
       <Label m={2}>product gas</Label>
      <Input
        type="text"
        name="name"
        id="name"
        value={gas}
        m={3}
        required
        onChange={(e) => setGas(e.target.value)}
      />
      <Label m={2}>gearType</Label>
      <Textarea
        name="description"
        id="description"
        value={gearType}
        m={3}
        required
        onChange={(e) => setGearType(e.target.value)}
      />
      <Label m={2}>car daily Price </Label>
      <Input
        type="number"
        name="price"
        id="price"
        value={dailyPrice}
        m={3}
        required
        onChange={(e) => setDailyPrice(e.target.value)}
      />
       <Label m={2}>car monthly Price </Label>
      <Input
        type="number"
        name="price"
        id="price"
        value={monthlyPrice}
        m={3}
        required
        onChange={(e) => setMonthlyPrice(e.target.value)}
      />
      <Button
        type="submit"
        to="rentals"
        p={3}
        m={3}
        sx={{
          backgroundColor: '#0d1117',
          width: '100%',
          cursor: 'pointer',
        }}
      >
        Upload
      </Button>
    </Box>
  );
};

export default AddCarForm;
