import mongoose from "mongoose";

const categoryIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
  ];

export const categories = [
    {
        _id: categoryIds[0],
        name: `Category 1`,
        notes: [
            {
              _id: new mongoose.Types.ObjectId(),
              title: `Title 1`,
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor necessitatibus dolore obcaecati praesentium ullam hic odit quo nam repellat.",
            },
        ],
    },
    {
        _id: categoryIds[1],
        name: `Category 2`,
        notes: [
            {
              _id: new mongoose.Types.ObjectId(),
              title: `Title 1`,
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor necessitatibus dolore obcaecati praesentium ullam hic odit quo nam repellat.",
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: `Title 2`,
                content: "A bit longer note with more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: `Title 3`,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor necessitatibus dolore obcaecati praesentium ullam hic odit quo nam repellat.",
              },
              {
                  _id: new mongoose.Types.ObjectId(),
                  title: `Title 4`,
                  content: "A bit longer note with more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                _id: new mongoose.Types.ObjectId(),
                title: `Title 5`,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor necessitatibus dolore obcaecati praesentium ullam hic odit quo nam repellat.",
              },
        ],
    },
    {
        _id: categoryIds[2],
        name: `Category 3`,
        notes: [
            {
              _id: new mongoose.Types.ObjectId(),
              title: `Title 1`,
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor necessitatibus dolore obcaecati praesentium ullam hic odit quo nam repellat.",
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: `Title 2`,
                content: "A bit longer note with more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
    },
    {
        _id: categoryIds[3],
        name: `Category 4`,
        notes: [
            {
              _id: new mongoose.Types.ObjectId(),
              title: `Title 1`,
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor necessitatibus dolore obcaecati praesentium ullam hic odit quo nam repellat.",
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: `Title 2`,
                content: "A bit longer note with more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: `Title 3`,
                content: "A bit longer note with more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
    },
    {
        _id: categoryIds[4],
        name: `Category 5`,
        notes: [
            {
                _id: new mongoose.Types.ObjectId(),
                title: `Title 2`,
                content: "A bit longer note with more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
    },
    {
        _id: categoryIds[5],
        name: `Category 6`,
        notes: [
        ],
    },
    {
        _id: categoryIds[6],
        name: `Category 7`,
        notes: [
        ],
    },
    {
        _id: categoryIds[7],
        name: `Category 8`,
        notes: [
        ],
    },
    {
        _id: categoryIds[8],
        name: `Category 9`,
        notes: [
        ],
    },
    {
        _id: categoryIds[9],
        name: `Category 10`,
        notes: [
        ],
    },
    {
        _id: categoryIds[10],
        name: `Category 11`,
        notes: [
        ],
    },
    {
        _id: categoryIds[11],
        name: `Category 12`,
        notes: [
        ],
    },
    {
        _id: categoryIds[12],
        name: `Category 13`,
        notes: [
        ],
    },
    {
        _id: categoryIds[13],
        name: `Category 14`,
        notes: [
        ],
    },
    {
        _id: categoryIds[14],
        name: `Category 15`,
        notes: [
        ],
    },
    {
        _id: categoryIds[15],
        name: `Category 16`,
        notes: [
        ],
    },
  ];
  