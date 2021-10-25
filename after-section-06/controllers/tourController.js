// const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch {
    res.status(404).json({
      status: 'fail',
      message: 'invalid',
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    // console.log(req.params);
    // const id = req.params.id * 1;
    const getTour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'sucess',
      data: {
        getTour,
      },
    });
  } catch {
    res.status(404).json({
      status: 'fail',
      message: 'invalid',
    });
  }
};

// const tour = tours.find(el => el.id === id);

// res.status(200).json({
//   status: 'success',
//   // data: {
//   //   tour
//   // }
// });

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'invalid',
    });
  }

  // console.log(req.body);
};

exports.updateTour = async(req, res) => {try {
  // console.log(req.params);
  // const id = req.params.id * 1;
  const getTour = await Tour.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidator:true});
  res.status(200).json({
    status: 'sucess',
    data: {
      getTour,
    },
  });
} catch {
  res.status(404).json({
    status: 'fail',
    message: 'invalid',
  });
}
}
exports.deleteTour = async(req, res) => {try {
  // console.log(req.params);
  // const id = req.params.id * 1;
  const getTour = await Tour.findByIdAndDelete(req.params.id,req.body,{new:true,runValidator:true});
  res.status(200).json({
    status: 'sucess',
    data: {
      getTour,
    },
  });
} catch {
  res.status(404).json({
    status: 'fail',
    message: 'invalid',
  });
}
}