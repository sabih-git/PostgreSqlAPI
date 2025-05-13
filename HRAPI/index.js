const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HRAPI')
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/region',async(req,res)=>{
    try{
        const result = await pool.query('select * from regions');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/employee',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from Countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/job',async(req,res)=>{
    try{
        const result = await pool.query('select * from jobs');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/jobhistory',async(req,res)=>{
    try{
        const result = await pool.query('select * from job_history');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/department',async(req,res)=>{
    try{
        const result = await pool.query('select * from departments');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/location',async(req,res)=>{
    try{
        const result = await pool.query('select * from locations');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/totalemp',async(req,res)=>{
    try{
        const result = await pool.query('select count(employtee_id) from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/totalctry',async(req,res)=>{
    try{
        const result = await pool.query('select count(country_id) from countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/totalregions',async(req,res)=>{
    try{
        const result = await pool.query('select count(region_id) from regions');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/totallocations',async(req,res)=>{
    try{
        const result = await pool.query('select count(location_id) from locations');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/totaldepartments',async(req,res)=>{
    try{
        const result = await pool.query('select count(department_id) from departments');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/totaljobs',async(req,res)=>{
    try{
        const result = await pool.query('select count(job_id) from jobs');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully...on PORT ${PORT}`)
});