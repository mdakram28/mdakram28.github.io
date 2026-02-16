# CodeBoard

Online judge and programming contest platform built with Node.js/Express and MongoDB.

## Highlights
- Contest + challenge administration workflows (authoring, scheduling, testcase management)
- Multi-language code execution pipeline for **C++**, **Java**, **Python**, and **Node.js**
- Real-time compile/run/submit feedback via **Socket.IO**
- Submission scoring with testcase-wise result breakdown
- User auth and role-based admin routes with Passport + Mongoose models

## Architecture
- **Backend:** Express routes + Mongoose models for contests, challenges, and submissions
- **Execution layer:** language-specific executors and queued submission processing
- **Frontend:** EJS pages with ACE editor integration for in-browser coding
- **Realtime channel:** Socket events for compile status, testcase events, and result updates

## Repository
- GitHub: https://github.com/mdakram28/codeboard

## Note
The upstream repository README is currently minimal. This summary is generated from the source structure and implementation details to keep portfolio content accurate.
