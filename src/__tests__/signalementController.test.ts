import { Request, Response } from 'express';
import { listSignalements } from '../controllers/signalementController';
import Signalement from '../models/signalement';

jest.mock('../models/signalement');

describe('Signalement Controller', () => {
    it('should render the signalements list', async () => {
        const mockSignalements = [
            { titre: 'Test 1', description: 'Description 1', localisation: { coordonnees: [0, 0] } },
            { titre: 'Test 2', description: 'Description 2', localisation: { coordonnees: [1, 1] } },
        ];

        (Signalement.find as jest.Mock).mockResolvedValue(mockSignalements);

        const req = {} as Request;
        const res = {
            render: jest.fn(),
        } as unknown as Response;

        await listSignalements(req, res);

        expect(res.render).toHaveBeenCalledWith('signalements/index', { signalements: mockSignalements });
    });
});